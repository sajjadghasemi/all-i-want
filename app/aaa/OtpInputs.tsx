"use client";

import { useMemo } from "react";
import { RE_DIGIT } from "../constans";

export type Props = {
    value: string;
    valueLength: number;
    onChange: (value: string) => void;
};

export default function OtpInputs({ value, valueLength, onChange }: Props) {
    const valueItems = useMemo(() => {
        const valueArray = value.split("");
        const items: Array<string> = [];
        for (let i = 0; i < valueLength; i++) {
            const char = valueArray[i];
            if (RE_DIGIT.test(char)) {
                items.push(char);
            } else {
                items.push("");
            }
        }
        return items;
    }, [value, valueLength]);

    const focusToNextInput = (target: HTMLElement) => {
        const nextElementSibling =
            target.nextElementSibling as HTMLInputElement | null;

        if (nextElementSibling) {
            nextElementSibling.focus();
        }
    };

    const focusToPrevInput = (target: HTMLElement) => {
        const previousElementSibling =
            target.previousElementSibling as HTMLInputElement | null;

        if (previousElementSibling) {
            previousElementSibling.focus();
        }
    };

    const inputOnChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        idx: number
    ) => {
        const target = e.target;
        let targetValue = target.value.trim();
        const isTargetValueDigit = RE_DIGIT.test(targetValue);
        const nextInputEl =
            target.nextElementSibling as HTMLInputElement | null;
        if (!isTargetValueDigit && nextInputEl && nextInputEl.value !== "") {
            return;
        }
        targetValue = isTargetValueDigit ? targetValue : " ";
        const targetValueLength = targetValue.length;
        if (targetValueLength === 1) {
            const newValue =
                value.substring(0, idx) +
                targetValue +
                value.substring(idx + 1);
            onChange(newValue);
            if (!isTargetValueDigit) {
                return;
            }
            focusToNextInput(target);
            const nextElementSibling =
                target.nextElementSibling as HTMLInputElement | null;
            if (nextElementSibling) {
                nextElementSibling.focus();
            }
        } else if (targetValueLength === valueLength) {
            onChange(targetValue);
            target.blur();
        }
    };

    const inputOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement;
        const targetValue = target.value;
        const { key } = e;
        if (key === "ArrowRight" || key === "ArrowDown") {
            e.preventDefault();
            return focusToNextInput(target);
        }
        if (key === "ArrowLeft" || key === "ArrowUp") {
            e.preventDefault();
            return focusToPrevInput(target);
        }
        target.setSelectionRange(0, targetValue.length);
        if (e.key !== "Backspace" || target.value !== "") {
            return;
        }
        const previousElementSibling =
            target.previousElementSibling as HTMLInputElement | null;
        if (previousElementSibling) {
            previousElementSibling.focus();
        }
        if (e.key !== "Backspace" || targetValue !== "") {
            return;
        }
        focusToPrevInput(target);
    };

    const inputOnFocus = (e: React.FocusEvent<HTMLInputElement>) => {
        const { target } = e;
        target.setSelectionRange(0, target.value.length);
        const prevInputEl =
            target.previousElementSibling as HTMLInputElement | null;
        if (prevInputEl && prevInputEl.value === "") {
            return prevInputEl.focus();
        }
        target.setSelectionRange(0, target.value.length);
    };

    return (
        <div className="flex w-full max-w-sm gap-3">
            {valueItems.map((digit, idx) => (
                <input
                    key={idx}
                    type="text"
                    inputMode="numeric"
                    autoComplete="one-time-code"
                    pattern="\d{1}"
                    maxLength={valueLength}
                    className="w-full h-14 border-[1px] border-yellow-800 rounded-3xl text-center text-lg font-bold"
                    value={digit}
                    onChange={(e) => inputOnChange(e, idx)}
                    onKeyDown={inputOnKeyDown}
                    onFocus={inputOnFocus}
                />
            ))}
        </div>
    );
}
