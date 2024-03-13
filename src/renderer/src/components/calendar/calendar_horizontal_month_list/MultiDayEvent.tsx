import formatter from '../common/formatter'
import { getFirstColor } from '../common/formatter'

import testSettings from '../../../assets/testSettings.json'




function MultiDayEvent(_year: any, _month: any, _index: number, day: any, _eventsPerDay: number, event: any) {


    const timeBetweenStartAndEnd = new Date(event.end).getTime() - new Date(event.start).getTime()

    let borderCalc = '1px 1px 1px 0px'
    /*
    let borderCalc = '0px 0px 1px 0px'
    if (_index >= (_eventsPerDay - 1)) {
        borderCalc = '0px 0px 0px 0px'
    }
    */


    const dayStyleCalc = {
        border: '1px solid #ccc',
        borderWidth: borderCalc,
        padding: '0px',
        margin: '5px 0px 5px 0px',
        height: 'calc(calc(calc(12px * ' + _eventsPerDay + ')  * ' + Math.round(timeBetweenStartAndEnd / (1000 * 3600 * 24)) + ') - 13px)',
        left: 'calc(' + event.listPosition + ' * 25%)',
        top: '0px'
    }
    const id = _year + "_" + _month + "_" + day + "_" + _index;
    return (
        <>

            <div className='multidayElement' style={{ ...dayStyleCalc, width: 'calc(calc(100% / 4) - 1px)', backgroundColor: getFirstColor(event.title, testSettings) }} id={id}>
                <div className='multidayElementdescription' style={{ float: 'left', width: '500px', height: '100px', position: 'relative' }}>
                    <div style={{ float: 'left', padding: '0px 2px 0px 0px' }}>{new Date(event.start).toLocaleString('default', { hour: '2-digit', minute: '2-digit' })}</div>
                    <div style={{ float: 'left' }} dangerouslySetInnerHTML={{ __html: formatter(event.title, testSettings) }} />
                </div>
            </div>

        </>

    )
}

export default MultiDayEvent;