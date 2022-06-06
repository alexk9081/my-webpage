import DummyItem from './dummyItem';
import classes from './scrollableDiv.module.css';

function ScrollableDiv(props) {
    return <div className={classes.viewBox}>
        This is the ScrollableDiv component.
        <DummyItem></DummyItem>
        <DummyItem></DummyItem>
        <DummyItem></DummyItem>
    </div>
}

export default ScrollableDiv;