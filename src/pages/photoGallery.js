import PhotoColumn from "../components/photoColumn";
import classes from './photoGallery.module.css';

function GalleryPage() {
    return <div className={classes.photosBox}>
        <PhotoColumn />
        <PhotoColumn />
        <PhotoColumn />
    </div>
}

export default GalleryPage;