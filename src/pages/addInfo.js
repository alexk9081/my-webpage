import Input from '../components/inputBox'
// import classes from './addInfo.module.css';

function AddInfo() {
    return <div>
        <form>
            <Input id="Test" label="Full Name" placeHolder="John Doe" />
            <Input id="Test2" label="Phone Number" placeHolder="(256) 411-2579" />
            <Input id="Test3" label="Email" placeHolder="jdoebody@gmail.com" />
        </form>
        <button>Submit</button>
    </div>
}

export default AddInfo;