import { Movie } from './movie';

export interface Result {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}
