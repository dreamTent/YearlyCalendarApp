import testCalendarData from '../../../assets/testSettings.json'


function CategoryFilterTable() {
    return (
        testCalendarData.categories.map((item, index) => (getTable(item)))

    )
}

function getTable(elements) {
    if (elements.showTableWithColors) {
        return (
            <div style={{ float: 'left' }}>
                <h1>{elements.title}</h1>
                {

                    elements.filters.map((item, index) => (
                        getFilter(item)
                    ))
                }

            </div>
        )
    }

}


function getFilter(element) {
    return (
        <div style={{ float: 'left', width: '100%' }}>
            <div style={{ float: 'left', width: '8px', height: '8px', borderStyle: 'solid', borderWidth: ' 1px', backgroundColor: element.highlightColor, margin: '2px 2px 0 0' }} />


            <div style={{ float: 'left' }}>
                {element.title}
            </div>
        </div>
    )
}
export default CategoryFilterTable;