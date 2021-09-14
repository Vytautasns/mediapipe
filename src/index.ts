import './style/main.scss';


// @ts-ignore
import DeviceDetector from "device-detector-js";
import {
    ControlPanel,
    FPS,
    InputImage,
    Rectangle,
    Slider,
    SourcePicker,
    StaticText,
    Toggle
} from "@mediapipe/control_utils";
import {
    FaceMesh, FACEMESH_FACE_OVAL, FACEMESH_LEFT_EYE, FACEMESH_LEFT_EYEBROW, FACEMESH_LIPS,
    FACEMESH_RIGHT_EYE,
    FACEMESH_RIGHT_EYEBROW,
    FACEMESH_TESSELATION, Options,
    Results
} from "@mediapipe/face_mesh";
import {drawConnectors} from "@mediapipe/drawing_utils";

// Usage: testSupport({client?: string, os?: string}[])
// Client and os are regular expressions.
// See: https://cdn.jsdelivr.net/npm/device-detector-js@2.2.10/README.md for
// legal values for client and os
testSupport([
    {client: 'Chrome'},
]);

function testSupport(supportedDevices: { client?: string; os?: string; }[]) {
    const deviceDetector = new DeviceDetector();
    const detectedDevice = deviceDetector.parse(navigator.userAgent);

    let isSupported = false;
    for (const device of supportedDevices) {
        if (device.client !== undefined) {
            const re = new RegExp(`^${device.client}$`);
            if (!re.test(detectedDevice.client.name)) {
                continue;
            }
        }
        if (device.os !== undefined) {
            const re = new RegExp(`^${device.os}$`);
            if (!re.test(detectedDevice.os.name)) {
                continue;
            }
        }
        isSupported = true;
        break;
    }
    if (!isSupported) {
        alert(`This demo, running on ${detectedDevice.client.name}/${detectedDevice.os.name}, ` +
            `is not well supported at this time, continue at your own risk.`);
    }
}


// Our input frames will come from here.
const videoElement =
    document.getElementsByClassName('input_video')[0] as HTMLVideoElement;
const canvasElement =
    document.getElementsByClassName('output_canvas')[0] as HTMLCanvasElement;
const controlsElement =
    document.getElementsByClassName('control-panel')[0] as HTMLDivElement;
const canvasCtx = canvasElement.getContext('2d')!;

// We'll add this to our control panel later, but we'll save it here so we can
// call tick() each time the graph runs.
const fpsControl = new FPS();

// Optimization: Turn off animated spinner after its hiding animation is done.
const spinner = document.querySelector('.loading')! as HTMLDivElement;
spinner.ontransitionend = () => {
    spinner.style.display = 'none';
};

function onResults(results: Results): void {
    // Hide the spinner.
    document.body.classList.add('loaded');

    // Update the frame rate.
    fpsControl.tick();

    // Draw the overlays.
    canvasCtx.save();
    canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
    canvasCtx.drawImage(
        results.image, 0, 0, canvasElement.width, canvasElement.height);
    if (results.multiFaceLandmarks) {
        for (const landmarks of results.multiFaceLandmarks) {
            drawConnectors(
                canvasCtx, landmarks, FACEMESH_TESSELATION,
                {color: '#C0C0C070', lineWidth: 1});
            drawConnectors(
                canvasCtx, landmarks, FACEMESH_RIGHT_EYE,
                {color: '#FF3030'});
            drawConnectors(
                canvasCtx, landmarks, FACEMESH_RIGHT_EYEBROW,
                {color: '#FF3030'});
            drawConnectors(
                canvasCtx, landmarks, FACEMESH_LEFT_EYE,
                {color: '#30FF30'});
            drawConnectors(
                canvasCtx, landmarks, FACEMESH_LEFT_EYEBROW,
                {color: '#30FF30'});
            drawConnectors(
                canvasCtx, landmarks, FACEMESH_FACE_OVAL,
                {color: '#E0E0E0'});
            drawConnectors(
                canvasCtx, landmarks, FACEMESH_LIPS, {color: '#E0E0E0'});
        }
    }
    canvasCtx.restore();
}

const faceMesh = new FaceMesh({
    locateFile: (file) => {
        return `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh@0.4/${file}`;
    }
});
faceMesh.onResults(onResults);

// Present a control panel through which the user can manipulate the solution
// options.
new ControlPanel(controlsElement, {
    selfieMode: true,
    maxNumFaces: 1,
    minDetectionConfidence: 0.5,
    minTrackingConfidence: 0.5
})
    .add([
        new StaticText({title: 'MediaPipe Face Mesh'}),
        fpsControl,
        new Toggle({title: 'Selfie Mode', field: 'selfieMode'}),
        new SourcePicker({
            onSourceChanged: () => {
                faceMesh.reset();
            },
            onFrame:
                async (input: InputImage, size: Rectangle) => {
                    const aspect = size.height / size.width;
                    let width: number, height: number;
                    if (window.innerWidth > window.innerHeight) {
                        height = window.innerHeight;
                        width = height / aspect;
                    } else {
                        width = window.innerWidth;
                        height = width * aspect;
                    }
                    canvasElement.width = width;
                    canvasElement.height = height;
                    await faceMesh.send({image: input});
                },
            examples: {
                videos: [],
                images: [],
            }
        }),
        new Slider({
            title: 'Max Number of Faces',
            field: 'maxNumFaces',
            range: [1, 4],
            step: 1
        }),
        new Slider({
            title: 'Min Detection Confidence',
            field: 'minDetectionConfidence',
            range: [0, 1],
            step: 0.01
        }),
        new Slider({
            title: 'Min Tracking Confidence',
            field: 'minTrackingConfidence',
            range: [0, 1],
            step: 0.01
        }),
    ])
    .on(x => {
        const options = x as Options;
        videoElement.classList.toggle('selfie', options.selfieMode);
        faceMesh.setOptions(options);
    });
