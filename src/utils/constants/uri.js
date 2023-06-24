export default class URIConstant {
    static NOW_PLAYING = process.env.REACT_APP_TMDB_API_BASE_URL + process.env.REACT_APP_TMDB_API_URL_NOW_PLAYING + "?api_key=" + process.env.REACT_APP_API_TMDB_KEY;
    static TOP_RATED = process.env.REACT_APP_TMDB_API_BASE_URL + process.env.REACT_APP_TMDB_API_URL_TOP_RATED + "?api_key=" + process.env.REACT_APP_API_TMDB_KEY;
    static POPULAR = process.env.REACT_APP_TMDB_API_BASE_URL + process.env.REACT_APP_TMDB_API_URL_POPULAR + "?api_key=" + process.env.REACT_APP_API_TMDB_KEY;
    static UPCOMING = process.env.REACT_APP_TMDB_API_BASE_URL + process.env.REACT_APP_TMDB_API_URL_UPCOMING + "?api_key=" + process.env.REACT_APP_API_TMDB_KEY;

    static TRENDING_DAY = process.env.REACT_APP_TMDB_API_BASE_URL + process.env.REACT_APP_TMDB_API_URL_TRENDING_DAY + "?api_key=" + process.env.REACT_APP_API_TMDB_KEY;
    static TRENDING_MONTH = process.env.REACT_APP_TMDB_API_BASE_URL + process.env.REACT_APP_TMDB_API_URL_TRENDING_MONTH + "?api_key=" + process.env.REACT_APP_API_TMDB_KEY;
    static TRENDING_YEAR = process.env.REACT_APP_TMDB_API_BASE_URL + process.env.REACT_APP_TMDB_API_URL_TRENDING_YEAR + "?api_key=" + process.env.REACT_APP_API_TMDB_KEY;

    static YOUTUBE_BASE_URL = process.env.REACT_APP_YOUTUBE_BASE_URL;

    static imageURL(uri) {
        return process.env.REACT_APP_TMDB_API_IMAGE_BASE_URL + "/w300" + uri;
    }

    static detail(id) {
        return process.env.REACT_APP_TMDB_API_BASE_URL + process.env.REACT_APP_TMDB_API_URL_DETAIL + "/" + id + "?api_key=" + process.env.REACT_APP_API_TMDB_KEY + "&append_to_response=videos,genres";
    }

    static recommendation(id) {
        return process.env.REACT_APP_TMDB_API_BASE_URL + process.env.REACT_APP_TMDB_API_URL_DETAIL + "/" + id + "/recommendations?api_key=" + process.env.REACT_APP_API_TMDB_KEY;
    }

    static trailer(key) {
        return process.env.REACT_APP_YOUTUBE_BASE_URL + key;
    }
}
