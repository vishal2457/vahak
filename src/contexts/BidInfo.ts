import { Context, createContext } from 'react';
import { BidContextType} from '../types/Bids';
export const BidContext = createContext<BidContextType>({state:null, functions:null});
