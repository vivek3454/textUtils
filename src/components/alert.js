import React from 'react'

export default function Alert(props) {
    // const btn = document.querySelector(".hide");
    // const hide = ()=>{
    //     btn.classList.add('hidden');
    //     // alert(btn)
    // }
    return (
        props.alert && <div id="alert-1" className="flex hide w-auto absolute top-10 left-[42%] max-[769px]:left-[35%] max-[426px]:left-[20%] max-[376px]:left-[17%] max-[321px]:left-[10%] m-auto p-4 mb-4 text-green-800 rounded-lg bg-green-300 justify-center" role="alert">
            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
            <div className="ml-3 text-sm font-medium">
                <strong>{props.alert.type}</strong> : {props.alert.msg}
            </div>
        </div>
    )
}
