import testCalendarData from '../../../assets/testSettings.json'


function CategoryFilterTable() {


    return (
        testCalendarData.categories.map((item, index) => (getTable(item)))

    )
    let html = ''; // Initialize an empty string for our HTML

    // Loop through categories
    for (let index = 0; index < testCalendarData.categories.length; index++) {
        if (testCalendarData.categories[index].showTableWithColors) {
            html += getTable(testCalendarData.categories[index].filters); // Add the table to our HTML string
        }
    }

    return html; // Return the complete HTML as a string
}

function getTable(elements) {
    if (elements.showTableWithColors) {
        return (
            <>
                <h1>{elements.title}</h1>
                {

                    elements.filters.map((item, index) => (
                        getFilter(item)
                    ))
                }

            </>
        )
    }

}


function getFilter(element) {
    return (
        <div style={{ float: 'left', width: '100%' }}>
            <div style={{ float: 'left', width: '8px', height: '8px', borderStyle: 'solid', borderWidth: ' 1px', backgroundColor: element.highlightColor }} />


            <div style={{ float: 'left' }}>
                {element.title}
            </div>
        </div>
    )
}
export default CategoryFilterTable;