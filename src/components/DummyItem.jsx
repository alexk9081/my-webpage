import classes from "./DummyItem.module.css";

function DummyItem() {
    return <div className={classes.item}>
        <h1>This is the DummyItem component</h1>
        <ul>
            <li>Hello 1</li>
            <li>Hello 2</li>
            <li>Hello 3</li>
        </ul>
    </div>
}

export default DummyItem;