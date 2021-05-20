import { Fragment } from "react";
import { useParams, Route } from "react-router-dom";
import Comments from '../comments/Comments';
import HighlightedQuote from '../quotes/HighlightedQuote'; 

const DUMMY_QUOTES = [
    {id: 'q1', author: 'Kim', text: 'Test quote no 1'},
    {id: 'q2', author: 'Jon', text: 'Test quote no 2'},
    {id: 'q3', author: 'Mike', text: 'Test quote no 3'},
    {id: 'q4', author: 'Lesly', text: 'Test quote no 1'},
];

const QuoteDetail = () => {
    const params = useParams();
    const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId);
    if (!quote) {
        return <p>No quote found!</p>
    }
    return <Fragment>
        <HighlightedQuote text={quote.text} author={quote.author} />
        <Route path={`/quotes/${params.quoteId}/comments`}>
            <Comments />
        </Route>
    </Fragment>
}

export default QuoteDetail;