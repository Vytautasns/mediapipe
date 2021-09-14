import {drawConnectors, drawLandmarks} from "@mediapipe/drawing_utils";
import {HAND_CONNECTIONS, Hands} from "@mediapipe/hands";
import {Camera} from "@mediapipe/camera_utils";
import _ from "lodash";


const videoElement = document.createElement('video');
const canvasElement = document.createElement('canvas');

videoElement.width = 320;
videoElement.height = 240;

canvasElement.width = 640;
canvasElement.height = 340;

document.body.append(videoElement);
document.body.append(canvasElement);

const canvasCtx = canvasElement.getContext('2d');

function onResults(results) {
    canvasCtx.save();
    canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
    canvasCtx.drawImage(results.image, 0, 0, canvasElement.width, canvasElement.height);


    if (results.multiHandLandmarks) {
        console.log(results.multiHandLandmarks);
        for (const landmarks of results.multiHandLandmarks) {
            drawConnectors(canvasCtx, landmarks, HAND_CONNECTIONS,{color: '#00FF00', lineWidth: 5});
            drawLandmarks(canvasCtx, landmarks, {color: '#FF0000', lineWidth: 2});
        }
    }

    canvasCtx.restore();
}

const hands = new Hands({locateFile: (file) => {
        return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
    }});
hands.setOptions({
    maxNumHands: 2,
    minDetectionConfidence: 0.5,
    minTrackingConfidence: 0.5
});
hands.onResults(onResults);

const camera = new Camera(videoElement, {
    onFrame: async () => {
        await hands.send({image: videoElement});
    },
    width: 1280,
    height: 720
});
camera.start().then(r => {
    console.log(r);
});
