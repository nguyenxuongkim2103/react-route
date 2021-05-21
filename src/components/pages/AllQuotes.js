import QuoteList from '../../components/quotes/QuoteList';

const DUMMY_QUOTES = [
    {id: 'q1', author: 'Kim', text: 'Test quote no 1'},
    {id: 'q2', author: 'Jon', text: 'Test quote no 2'},
    {id: 'q3', author: 'Mike', text: 'Test quote no 3'},
    {id: 'q4', author: 'Lesly', text: 'Test quote no 4'},
];


const AllQuotes = () => {
    return <QuoteList quotes={DUMMY_QUOTES} />
}

export default AllQuotes;