import DummyItem from './dummyItem';
import classes from './scrollableDiv.module.css';

function ScrollableDiv(props) {
    return <div className={classes.viewBox}>
        <DummyItem></DummyItem>
        <DummyItem></DummyItem>
        <DummyItem></DummyItem>
    </div>
}

export default ScrollableDiv;