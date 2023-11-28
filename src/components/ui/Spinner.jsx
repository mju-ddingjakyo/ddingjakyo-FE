import React from 'react'
import { ClipLoader } from 'react-spinners';
export default function Spinner() {
    return (
        <div class="contentWrap">
            <div
                style={{
                    position: "fixed",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                }}
            >
                <ClipLoader
                    color="#3d07d0"
                    height={15}
                    width={5}
                    radius={2}
                    margin={2}
                />
            </div>
        </div>
    );
}
