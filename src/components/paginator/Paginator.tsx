import { FC, useState } from 'react';
import { pagination } from '../../helpers';
import { Button } from '../button/Button';
import { ArrowLeft, ArrowRight } from '../svg';
import './styles.css';

const Paginator: FC = () => {
  const [currentPage, setCurrentPage] = useState('1');
  const showPagesCount = 6;
  const totalPagesAmount = '18';
  let pages = pagination(showPagesCount)(currentPage, totalPagesAmount);

  const handleChangePage = (page: string) => {
    if (page === '...') {
      return;
    }
    setCurrentPage(page);
    pages = pagination(showPagesCount)(page, totalPagesAmount);
  };

  const handleOpenNextPage = (page: string) => {
    return setCurrentPage((+page + 1).toString());
  };
  const handleOpenPrevPage = (page: string) => {
    return setCurrentPage((+page - 1).toString());
  };

  return (
    <div className="paginator">
      <Button onClick={() => handleOpenPrevPage(currentPage)} className="paginator-btn back-btn">
        <ArrowLeft />
      </Button>
      <div className="pages">
        {pages.map((page, index) => (
          <Button
            key={`${page}_${index}`}
            className={page === currentPage ? 'page-number page-active' : 'page-number'}
            onClick={() => handleChangePage(page)}
          >
            {page}
          </Button>
        ))}
      </div>
      <Button onClick={() => handleOpenNextPage(currentPage)} className="paginator-btn forward-btn">
        <ArrowRight />
      </Button>
    </div>
  );
};

export { Paginator };
