class FlickrPhoto extends Photo{

    id;
    farm;
    server;
    secret;
    owner;

    constructor(id, title, farm, server, secret, owner){
        super(title);

        this.id = id;
        this.farm = farm;
        this.server = server;
        this.secret = secret;
        this.owner = owner;
    }

    toUrl(){
        return `https://farm${this.farm}.staticflickr.com/${this.server}/${this.id}_${this.secret}.jpg`;
    }

}