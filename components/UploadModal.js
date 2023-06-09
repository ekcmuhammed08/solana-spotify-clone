import styles from '../styles/UploadModal.module.css'


// const styles ={
//     title:``,
//     Wrapper:``,
//     inputField:``,
//     inputTitle:``,
//     inputContainer:``,
//     input:``,
//     createButton:``,
//     button:``,
// }
const UploadModal = ({
    description:title,
    musicURL,
    setTitle,
    setMusicURL,
    setShowUploadMusic,
    newMusic,
}) => {
    
  return (
    <div className={styles.wrapper}>
        <div className={styles.modalTitle}>
            Upload Music
        </div>
        <div className={styles.inputField}>
            <div className={styles.inputTitle}>Title</div>
            <div className={styles.inputContainer}>
                <input 
                className={styles.input}
                type="text"
                value={title}
                onChange={e=>setTitle(e.target.value)}
                />
            </div>
        </div>
        <div className={styles.inputField}>
            <div className={styles.inputTitle}>
                Music URL
            </div>
            <div className={styles.inputContainer}>
                <input 
                className={styles.input}
                type="text"
                value={musicURL}
                onChange={e=>setMusicURL(e.target.value)}
                />
            </div>
        </div>
        <div className={styles.modalButtons}>
            <button
            onClick={()=>setShowUploadMusic(false)}
            className={styles.cancelButton}
            >
            Cancel
            </button>
            <button
            onClick={newMusic}
            className={`${styles.button}
            ${styles.createButton}`}
            >
            Upload 
            </button>
        </div>
    </div>
  )
}

export default UploadModal
