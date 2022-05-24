import React, {ChangeEvent, useCallback} from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./store/store";
import {disabledButtonAC, incValueAC, maxValueAC, minValueAC, resetValueAC, setValueAC} from "./redusers/reducer";
import {Header} from "./components/Header";
import MinMax from "./components/MinMax";
import Button from "./components/Button";

function App() {
    console.log('app')
    const value = useSelector<AppStoreType, number>(state => state.counter.value)
    const minValue = useSelector<AppStoreType, number>(state => state.counter.minValue)
    const maxValue = useSelector<AppStoreType, number>(state => state.counter.maxValue)
    const disabledButton = useSelector<AppStoreType, boolean>(state => state.counter.disableButton)

    const dispatch = useDispatch()

    const minHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        dispatch(minValueAC(+e.currentTarget.value))
    }, [dispatch])

    const maxHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        dispatch(maxValueAC(+e.currentTarget.value))
    }, [dispatch])

    const setHandler = useCallback(() => {
        dispatch(setValueAC())
        dispatch(disabledButtonAC(false))
    }, [dispatch])

    const dispatchInc = useCallback(() => {
        dispatch(incValueAC())
    }, [dispatch])

    const dispatchReset = useCallback(() => {
        dispatch(resetValueAC())
    }, [dispatch])

    const condition = (minValue >= maxValue || minValue < 0) && (minValue !== 0 || maxValue !== 0)

    return (
        <div className={'app'}>
            <div className={'dataInput'}>
                <Header className={condition ? 'redIncorrect' : ''}
                        name={condition ? 'incorrect values' : 'enter values'}/>
                <MinMax name={'min value: '} condition={condition} value={minValue} callback={minHandler}/>
                <MinMax name={'max value: '} condition={condition} value={maxValue} callback={maxHandler}/>
                <Button name={'Set'} callback={setHandler} disabled={minValue >= maxValue || minValue < 0}/>
            </div>
            <div className={'showResult'}>
                <Header className={value === maxValue ? 'redAchived' : ''}
                        name={value === maxValue && value !== 0 ? 'achieved max value' : 'counter from redux'}/>
                <div className={value === maxValue ? 'redCount' : 'showCount'}>{value >= 0 ? value : 0}</div>
                <div>
                    <Button name={'Inc'} callback={dispatchInc}
                            disabled={disabledButton || value >= maxValue || minValue < 0 || minValue >= maxValue}/>
                    <Button name={'Reset'} callback={dispatchReset}
                            disabled={disabledButton || value === minValue || minValue >= maxValue || minValue < 0}/>
                </div>
            </div>
        </div>
    );
}

export default App;
