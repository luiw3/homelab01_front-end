import React, { useEffect, useState } from "react";
import { useFormik } from 'formik';
import { EScreens } from "../../enum";
import { useSpring, animated, useTransition } from "react-spring";
import { useNavigate, useLocation } from 'react-router-dom';
import { useForm } from "./form-factory";
import FormInput from "./formInput";
import { FaPlusSquare } from "react-icons/fa";


const Form = () => {
    const { initialValues, formFields, validationSchema, onSubmit, icon, formType } = useForm();
    const animation = useSpring({ to: { y: 1, opacity: 1 }, from: { y: -23, opacity: 0 } });

    const AnimatedIcon = animated(icon);
    const nav = useNavigate();
    const loc = useLocation();
    const [state, setState] = useState(true);

    const trasition = useTransition(!state, {
        from: { y: -23, opacity: 0 },
        enter: { y: 1, opacity: 1 },
        leave: { y: -23, opacity: 0 }
    });

    let formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: values => onSubmit(values),
        validateOnChange: true
    });


    useEffect(() => {
        if ((formik.values as any).needsMoney && (formik.values as any).needsMoney !== 'false') {
            setState(false)
        }
        else {
            setState(true);
        }
    }, [formik.values])

    const cancelButton = () => {
        nav('/' + loc.pathname.split('/')[1]);
    }


    const height = formType === EScreens.EXPENSES ? 'h-[97%]'
        : formType === EScreens.CRYPTO ? 'h-[80%]' : 'h-[84%]';
    return (
        <div className="w-full h-full flex items-center">
            {
                formik ?
                    <form className={`w-11/12 m-auto p-12 bg-gray-400 rounded-lg ${height}`} onSubmit={formik.handleSubmit} id="main_form">
                        <div className="grid grid-cols-12 grid-rows-6 gap-y-4 gap-x-20 flex-1 items-center w-full h-full">
                            <div className={"col-span-6 row-start-1 row-span-5 self-start"}>
                                {formFields.map((f) =>
                                    !(formType === EScreens.GOALS &&
                                        (f.fieldId === 'amountNeeded' || f.fieldId === 'totalSaved')) ?
                                        <div className={"grid grid-rows-2 grid-cols-6 items-center text-md"} key={f.fieldId}>
                                            <div className={"col-span-6 flex items-center justify-between"}>
                                                <label className={f.type !== 1 ? "after:content-['*'] after:text-red-700 my-2" : ''}>{f.label.charAt(0).toUpperCase() + f.label.slice(1)} </label>
                                                {(formik.errors as any)[f.fieldId] && (formik.touched as any)[f.fieldId] ? (
                                                    <div className="text-sm text-red-700 font-semibold" >{(formik.errors as any)[f.fieldId]}</div>
                                                ) : null}
                                            </div>
                                            <FormInput
                                                type={f.type}
                                                id={f.fieldId}
                                                value={(formik.values as any)[f.fieldId]}
                                                error={(formik.errors as any)[f.fieldId] && (formik.touched as any)[f.fieldId]}
                                                valid={!(formik.errors as any)[f.fieldId] && (formik.touched as any)[f.fieldId]}
                                                handleChange={formik.handleChange}
                                                handleBlur={formik.handleBlur}
                                                selectOptions={f.options}
                                            />
                                        </div> :
                                        <React.Fragment key={f.fieldId}>
                                            {trasition((styles, item) =>
                                                item ?
                                                    <animated.div className={"grid grid-rows-2 grid-cols-6 items-center text-md"} style={styles}>
                                                        <div className={"col-span-6 flex items-center justify-between"}>
                                                            <label className={f.type !== 1 ? "after:content-['*'] after:text-red-700 my-2" : ''}>{f.label.charAt(0).toUpperCase() + f.label.slice(1)} </label>
                                                            {(formik.errors as any)[f.fieldId] && (formik.touched as any)[f.fieldId] ? (
                                                                <div className="text-sm text-red-700 font-semibold" >{(formik.errors as any)[f.fieldId]}</div>
                                                            ) : null}
                                                        </div>
                                                        <FormInput
                                                            type={f.type}
                                                            id={f.fieldId}
                                                            value={(formik.values as any)[f.fieldId]}
                                                            error={(formik.errors as any)[f.fieldId] && (formik.touched as any)[f.fieldId]}
                                                            valid={!(formik.errors as any)[f.fieldId] && (formik.touched as any)[f.fieldId]}
                                                            handleChange={formik.handleChange}
                                                            handleBlur={formik.handleBlur}
                                                            selectOptions={f.options}
                                                        />
                                                    </animated.div>
                                                    : null)}
                                        </React.Fragment>
                                )}
                            </div>
                            <div className="col-span-6 row-span-5 flex items-center justify-center">
                                <AnimatedIcon style={animation} size="10em" />
                            </div>
                            <div className={"col-span-12 row-start-6 row-span-1 flex justify-center items-end self-end"}>
                                <div className="w-2/6 flex justify-around">
                                    <button type="button" onClick={cancelButton} className="text-white bg-[#ff0000] hover:bg-red-600 shadow-sm shadow-gray-900 transition ease-in-out duration-500 hover:text-neutral-900 rounded-md py-1 w-5/12 h-full flex items-center justify-center">
                                        CANCEL
                                    </button>
                                    <button type="submit" className="text-white bg-[#02a107] hover:bg-green-600 shadow-sm shadow-gray-900 transition ease-in-out duration-500 hover:text-neutral-900 rounded-md py-1 w-5/12 h-full flex items-center justify-center">
                                        SAVE
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form> :
                    ''}

        </div>

    )
}

export default Form