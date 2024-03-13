import formatter from '../common/formatter'


import testSettings from '../../../assets/testSettings.json'



function Event(_year: any, _month: any, _index: number, day: any, _eventsPerDay: number, title: string, _body: string) {




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

            <div style={{ ...dayStyleCalc, float: 'left', width: '100%', height: '11px', fontSize: '8px', overflow: 'hidden' }} id={id} dangerouslySetInnerHTML={{ __html: formatter(title, testSettings) }}>

            </div>

        </>

    )
}

export default Event;