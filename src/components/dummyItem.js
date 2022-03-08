import classes from './dummyItem.module.css';

function DummyItem(props) {
    return <div className={classes.item}>
        Hello third
        <h1> THis is a test div</h1>
        <ul>
            <li> Hello </li>
            <li> goodbye</li>
            <li>Maybe??</li>
        </ul>
    </div>
}

export default DummyItem;