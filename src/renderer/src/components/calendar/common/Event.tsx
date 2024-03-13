import formatter from './formatter'


import testSettings from '../../../assets/testSettings.json'




function Event(_year: any, _month: any, _index: number, day: any, _eventsPerDay: number, event: any) {




    let borderCalc = '0px 0px 1px 0px'
    if (_index >= (_eventsPerDay - 1)) {
        borderCalc = '0px 0px 0px 0px'
    }

    const dayStyleCalc = {
        border: '1px solid #ccc',
        borderWidth: borderCalc,
        padding: '0px',

    }
    const id = _year + "_" + _month + "_" + day + "_" + _index;

    return (
        <>

            <div style={{ ...dayStyleCalc, float: 'left', width: '100%', height: '11px', fontSize: '8px' }} id={id} className="calendarEventPreviewTitle">
                <div style={{ float: 'left', width: '500px', overflow: 'hidden', height: '100%' }}>
                    <div style={{ float: 'left', padding: '0px 2px 0px 0px' }}>{new Date(event.start).toLocaleString('default', { hour: '2-digit', minute: '2-digit' })}</div>
                    <div style={{ float: 'left' }} dangerouslySetInnerHTML={{ __html: formatter(event.title, testSettings) }} />
                </div>
            </div>

        </>

    )
}

export default Event;