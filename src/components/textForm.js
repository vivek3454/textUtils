import React, { useState } from 'react'

export default function TextForm(props) {
    const handelUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!", "Success");
    }
    const handelLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase!", "Success");
    }
    const handelClClick = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared!", "Success");
    }
    const handelCoClick = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied!", "Success");
    }
    const handelRESClick = () => {
        let newText = text.split(/[\s]+/);
        console.log(newText);
        setText(newText.join(' '));
        props.showAlert("Removed Extra Space!", "Success");
    }

    const handelOnChange = () => {
        // eslint-disable-next-line no-restricted-globals
        setText(event.target.value);
    }

    const [text, setText] = useState('');
    // setText('new text')
    return (
        <>
            <div className=''>
                <div className={`px-10 max-[376px]:px-5 mt-5 w-full`}>
                    <h1 className='text-3xl font-medium'>{props.heading}</h1>
                    <textarea name="textArea" id="textArea" cols="90" rows="8" onChange={handelOnChange} value={text} className={`mt-3 border-2 border-${(props.mode === 'white') ? 'black' : 'white'} w-full bg-${(props.mode === 'white') ? 'white' : 'black'}`}></textarea>
                    <div className="mt-5 px-0">
                        <button disabled={text.length === 0} className="bg-gray-700 text-white rounded-md px-3 py-2 m-1 disabled:bg-slate-400" onClick={handelUpClick}>Convert to Uppercase</button>
                        <button disabled={text.length === 0} className="bg-gray-700 text-white rounded-md px-3 py-2 m-1 disabled:bg-slate-400" onClick={handelLoClick}>Convert to Lowercase</button>
                        <button disabled={text.length === 0} className="bg-gray-700 text-white rounded-md px-3 py-2 m-1 disabled:bg-slate-400" onClick={handelClClick}>Clear Text</button>
                        <button disabled={text.length === 0} className="bg-gray-700 text-white rounded-md px-3 py-2 m-1 disabled:bg-slate-400" onClick={handelCoClick}>Copy Text</button>
                        <button disabled={text.length === 0} className="bg-gray-700 text-white rounded-md px-3 py-2 m-1 disabled:bg-slate-400" onClick={handelRESClick}>Remove Extra Spaces</button>
                    </div>
                    <div className="mt-7">
                        <h1 className="text-3xl font-medium mb-2">Your text summary</h1>
                        <p><span className='font-bold'>{text.split(/\s+/).filter((el) => { return el.length !== 0 }).length}</span> words and <span className='font-bold'>{text.length}</span> characters</p>
                        <h3 className='font-medium text-3xl'>Preview</h3>
                        <p className='text-slate-600'>{text}</p>
                        {/* text === '' ? text.split(' ').length - 1 : text.split(' ').length */}
                    </div>
                </div>
            </div>
        </>
    )
}
