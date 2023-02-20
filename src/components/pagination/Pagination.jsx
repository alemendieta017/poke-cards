import styles from './pagination.module.css'

const Pagination = ({currentPage = 2, totalPages = 30, buttonLinks}) => {
  return (
    <>
    {currentPage >= 4 && (
      <button>principio</button>
    )}
    
    <button className={currentPage === 1 && styles.current}>1</button>
    {(currentPage <= 3 || currentPage >= totalPages-2) && <button className={currentPage === 2 && styles.current}>2</button>}
    {currentPage >= 4 && <button>...</button>}
    {(currentPage <= 3 || currentPage >= totalPages-2) && <button className={currentPage === 3 && styles.current}>3</button>}

    {(currentPage <= 4 || currentPage >= totalPages - 2) && <button>...</button>}

    {currentPage < 4 && <button>{totalPages - 2}</button>}
    {currentPage < 4 && <button>{totalPages - 1}</button>}
    {currentPage < 4 && <button>{totalPages}</button>}

    {currentPage !== totalPages && <button>final</button>}
    </>
  )
}

export default Pagination