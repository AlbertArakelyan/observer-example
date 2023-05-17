// Lib
import './lib/Datatable.js';
import { observer as userObserver } from './lib/index.js';

// Components
import { UserCard } from './components/index.js';

// Serivces
import { JsonPlaceholderService } from './services/index.js';

// Helpers
import { changeDatatableSource, setHtmlFromArray } from './helpers/index.js';


// Constants
const PER_PAGE = 2;

// Elements
const $datatableContainer = document.querySelector('.datatable-container');
const $cardsContainer = document.querySelector('.cards-container');

// Globals
const rows = [
  {
    dataIndex: 'id',
    value: 'ID',
  },
  {
    dataIndex: 'name',
    value: 'Name',
  },
  {
    dataIndex: 'username',
    value: 'Username',
  },
  {
    dataIndex: 'email',
    value: 'Email',
  },
  {
    dataIndex: 'phone',
    value: 'Phone',
  },
];

// Init
const datatable = $datatableContainer.datatable({
  rows,
  perPage: PER_PAGE,
  totalPages: 5,
  onPageChange,
});

// Observers
userObserver.subscribe(changeDatatableSource(datatable));
userObserver.subscribe(datatable.renderData.bind(datatable));
userObserver.subscribe(renderCardsData);

// Functions
async function onPageChange(page = 1) {
  try {
    const data = await JsonPlaceholderService.getUsers(PER_PAGE, page);
    userObserver.dispatch(data);
  } catch (error) {
    console.log(error);
  }
}

async function fetchInitialData() {
  try {
    const data = await JsonPlaceholderService.getUsers(PER_PAGE, 1);
    userObserver.dispatch(data);
  } catch (error) {
    console.log(error);
  }
}

function renderCardsData(data) {
  setHtmlFromArray($cardsContainer, data, UserCard);
}


fetchInitialData();