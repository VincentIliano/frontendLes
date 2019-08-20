class Flickr{
    
    searchPhotos(tag = "bicky"){

        fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=e65fefb58b3effd130a8c688bbc089cd&tags=${tag}&format=json&nojsoncallback=1`)
        .then(resp => resp.json())
        .then(resp => this.parsePhotos(resp));
    }

    parsePhotos(data){
        let photos = [];
        for (let i = 0, l = data.photos.photo.length; i < l; i++) {
            let newPhoto = new FlickrPhoto(
                data.photos.photo[i].id,
                data.photos.photo[i].title,
                data.photos.photo[i].farm,
                data.photos.photo[i].server,
                data.photos.photo[i].secret,
                data.photos.photo[i].owner
            );
            photos.push(newPhoto);
        }
        this.showPhotos(photos);
    }

    showPhotos(photos){
        let bobTheStringBuilder = "";

        for(let i = 0, l = photos.length; i < l; i++){
            bobTheStringBuilder += `
            <figure class="c-photos__photo">
                <img src="${photos[i].toUrl()}" title="${photos[i].toString()}" />
                <figcaption>${photos[i].toString()}</figcaption>
            </figure>
            `;
        }
        document.querySelector(".c-photos").innerHTML =bobTheStringBuilder;
    }
}