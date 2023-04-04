const GOOGLE_API_KEY = "AIzaSyDhWFwpUxQecoQ3RHT1jjVwgxj7V2O44iA";
export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
export const VIDEOS_LIST_URL =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key=" +
  GOOGLE_API_KEY;
export const YOUTUBE_SEARCH_BY_KEYWORD_API =
  "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=SEARCH_QUERY&type=video&key=" +
  GOOGLE_API_KEY;
export const COMMENT_DATA = [
  {
    name: "Priyanshu Singh",
    comment: "This is my comment",
    replies: [
      { name: "Priyanshu Singh", comment: "This is my comment", replies: [] },
      { name: "Priyanshu Singh", comment: "This is my comment", replies: [] },
      {
        name: "Priyanshu Singh",
        comment: "This is my comment",
        replies: [
          {
            name: "Priyanshu Singh",
            comment: "This is my comment",
            replies: [
              {
                name: "Priyanshu Singh",
                comment: "This is my comment",
                replies: [],
              },
              {
                name: "Priyanshu Singh",
                comment: "This is my comment",
                replies: [
                  {
                    name: "Priyanshu Singh",
                    comment:
                      "This is my comment. This is my comment This is my comment This is my comment This is my comment This is my comment This is my comment This is my comment This is my comment This is my comment",
                    replies: [],
                  },
                  {
                    name: "Priyanshu Singh",
                    comment: "This is my comment",
                    replies: [],
                  },
                ],
              },
            ],
          },
          {
            name: "Priyanshu Singh",
            comment: "This is my comment",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Priyanshu Singh",
    comment: "This is my comment",
    replies: [
      { name: "Priyanshu Singh", comment: "This is my comment", replies: [] },
    ],
  },
];
