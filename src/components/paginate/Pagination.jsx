import { useState } from 'react'
import styles from './pagination.module.css'

const Pagination = ({ totalPages = 10, buttonLinks }) => {
  const [currentPage, setCurrentPage] = useState(1)
  return (
    <>
      {currentPage >= 4 && (
        <button onClick={() => setCurrentPage(currentPage - 1)}>Inicio</button>
      )}

      <button className={currentPage === 1 ? styles.current : null}>1</button>
      {(currentPage < 4 || currentPage >= totalPages - 2) && (
        <button className={currentPage === 2 ? styles.current : null}>2</button>
      )}
      {(currentPage < 4 || currentPage >= totalPages - 2) && (
        <button className={currentPage === 3 ? styles.current : null}>3</button>
      )}

      {currentPage >= 4 && <button>...</button>}

      {(currentPage >= 4) & (currentPage < totalPages - 2) ? (
        <>
          <button>{currentPage - 1}</button>
          <button className={styles.current}>{currentPage}</button>
          <button>{currentPage + 1}</button>
        </>
      ) : null}

      {currentPage < totalPages - 2 && <button>...</button>}

      {(currentPage >= totalPages - 2 || currentPage < 4) && (
        <button
          className={currentPage === totalPages - 2 ? styles.current : null}
        >
          {totalPages - 2}
        </button>
      )}
      {(currentPage >= totalPages - 2 || currentPage < 4) && (
        <button
          className={currentPage === totalPages - 1 ? styles.current : null}
        >
          {totalPages - 1}
        </button>
      )}
      <button className={currentPage === totalPages ? styles.current : null}>
        {totalPages}
      </button>

      {currentPage !== totalPages && (
        <button onClick={() => setCurrentPage(currentPage + 1)}>final</button>
      )}
    </>
  )
}

export default Pagination
