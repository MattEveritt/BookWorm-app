class Book {
    constructor(id, genreIds, title, author, imageUrl, averageRating, blurb, purchaseLink, audioPurchaseLink)
        {
            this.id = id;
            this.genreIds = genreIds;
            this.title = title;
            this.author = author;
            this.imageUrl = imageUrl;
            this.averageRating = averageRating;
            this.blurb = blurb;
            this.purchaseLink = purchaseLink;
            this.audioPurchaseLink = audioPurchaseLink;
        }
}

export default Book;