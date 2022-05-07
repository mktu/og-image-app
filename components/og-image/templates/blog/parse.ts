import { parse } from 'url';
import { IncomingMessage } from 'http';
import { ComponentProps } from './'

export function parseRequest(req: IncomingMessage) {
    const { query } = parse(req.url || '/', true);
    const { 
        title = '', 
        titleFontSize = '36px', 
        authorName = '', 
        authorFontSize = '36px', 
        authorImageUrl = '',  } = ( query || {} );

    const parsedRequest : ComponentProps = {
        title: title ? decodeURIComponent(title as string) : '[Title here]',
        titleFontSize : titleFontSize as string,
        authorName : authorName as string,
        authorFontSize: authorFontSize as string,
        authorImageUrl: authorImageUrl ? decodeURIComponent(authorImageUrl as string) : ''
    };
    return parsedRequest;
}