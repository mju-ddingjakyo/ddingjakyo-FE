import React, { useState } from "react";

export default function GenderCheck({ setMBTI }) {
  const [iChecked, setIChecked] = useState(true);
  const [eChecked, setEChecked] = useState(false);

  const [nChecked, setNChecked] = useState(true);
  const [sChecked, setSChecked] = useState(false);

  const [tChecked, setTChecked] = useState(true);
  const [fChecked, setFChecked] = useState(false);

  const [jChecked, setJChecked] = useState(true);
  const [pChecked, setPChecked] = useState(false);
  return (
    <div className="flex flex-col ">
      <div className="text-xl font-bold">MBTI</div>
      <div className="flex pt-2">
        <div className="flex flex-col">
          <div className="pl-2 pr-5">
            <input
              type="checkbox"
              id="i"
              value={0}
              className="appearance-none w-3 h-3 border-2 rounded-full checked:bg-slate-600 mr-1"
              checked={iChecked}
              onChange={(e) => {
                setMBTI(e.target.value);
                setIChecked(true);
                setEChecked(false);
              }}
            />
            <label htmlFor="i" className="text-lg">
              I
            </label>
          </div>
          <div className="pl-2 pr-5">
            <input
              type="checkbox"
              id="e"
              className="appearance-none w-3 h-3 border-2 rounded-full checked:bg-slate-600 mr-1"
              value={1}
              checked={eChecked}
              onChange={(e) => {
                setMBTI(e.target.value);
                setIChecked(false);
                setEChecked(true);
              }}
            />
            <label htmlFor="e" className="text-lg">
              E
            </label>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="px-5">
            <input
              type="checkbox"
              id="n"
              className="appearance-none w-3 h-3 border-2 rounded-full checked:bg-slate-600 mr-1"
              value={0}
              checked={nChecked}
              onChange={(e) => {
                setMBTI(e.target.value);
                setNChecked(true);
                setSChecked(false);
              }}
            />
            <label htmlFor="n" className="text-lg">
              N
            </label>
          </div>
          <div className="px-5">
            <input
              type="checkbox"
              id="s"
              className="appearance-none w-3 h-3 border-2 rounded-full checked:bg-slate-600 mr-1"
              value={1}
              checked={sChecked}
              onChange={(e) => {
                setMBTI(e.target.value);
                setNChecked(false);
                setSChecked(true);
              }}
            />
            <label htmlFor="s" className="text-lg">
              S
            </label>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="px-5">
            <input
              type="checkbox"
              id="t"
              className="appearance-none w-3 h-3 border-2 rounded-full checked:bg-slate-600 mr-1"
              value={0}
              checked={tChecked}
              onChange={(e) => {
                setMBTI(e.target.value);
                setTChecked(true);
                setFChecked(false);
              }}
            />
            <label htmlFor="t" className="text-lg">
              T
            </label>
          </div>
          <div className="px-5">
            <input
              type="checkbox"
              id="f"
              className="appearance-none w-3 h-3 border-2 rounded-full checked:bg-slate-600 mr-1"
              value={1}
              checked={fChecked}
              onChange={(e) => {
                setMBTI(e.target.value);
                setTChecked(false);
                setFChecked(true);
              }}
            />
            <label htmlFor="f" className="text-lg">
              F
            </label>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="px-5">
            <input
              type="checkbox"
              id="j"
              className="appearance-none w-3 h-3 border-2 rounded-full checked:bg-slate-600 mr-1"
              value={0}
              checked={jChecked}
              onChange={(e) => {
                setMBTI(e.target.value);
                setJChecked(true);
                setPChecked(false);
              }}
            />
            <label htmlFor="j" className="text-lg">
              J
            </label>
          </div>
          <div className="px-5">
            <input
              type="checkbox"
              id="p"
              className="appearance-none w-3 h-3 border-2 rounded-full checked:bg-slate-600 mr-1"
              value={1}
              checked={pChecked}
              onChange={(e) => {
                setMBTI(e.target.value);
                setJChecked(false);
                setPChecked(true);
              }}
            />
            <label htmlFor="p" className="text-lg">
              P
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
