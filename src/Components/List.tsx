import data from "./ListData.json"

function List(props: { input: string; }) {
    //create a new array by filtering the original array
    const filteredData = data.filter((el) => {
        //if no input the return the original
        if (props.input === '') {
            return el;
        }
        //return the item which contains the user input
        else {
            return el.doc.toLowerCase().includes(props.input);
        }
    })
    return (
        <div>
            {filteredData.map((item) => (
                <p key={item.id}>{item.text}</p>
            ))}
        </div>
    )
}

export default List