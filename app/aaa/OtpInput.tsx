"use client";

import React, { useState } from "react";
import OtpInputs from "./OtpInputs";

const OtpInput = () => {
    const [otp, setOtp] = useState("");
    const onChange = (value: string) => {
        setOtp(value);
    };

    return (
        <div>
            <OtpInputs value={otp} valueLength={6} onChange={onChange} />
        </div>
    );
};

export default OtpInput;
