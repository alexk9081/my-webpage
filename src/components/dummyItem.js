import classes from './dummyItem.module.css';

function DummyItem(props) {
    return <div className={classes.item}>
        DummyItem component
        <h1> This is a test div</h1>
        <ul>
            <li>Hello 1</li>
            <li>Hello 2</li>
            <li>Hello 3</li>
        </ul>
    </div>
}

export default DummyItem;