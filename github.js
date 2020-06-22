class Github{
    constructor(){
        this.Client_ID='671e68b807d70cccbeda'
        this.client_secret='6a30e7cc353752d76ccd490b44bd665e111d5511'
        this.repos_count=5;
        this.repos_sort='created : asc';
    }

    async GetUser(user){
        const profileResponse=await fetch(`https://api.github.com/users/${user}?client_id=${this.Client_ID}&client_secret${this.client_secret}`);

        const repositoriesResponse=await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}client_id=${this.Client_ID}&client_secret${this.client_secret}`);

        const ProfileData= await profileResponse.json();
        const repositories= await repositoriesResponse.json();
        return {
            profile:ProfileData,
            repos:repositories
        }
        
    }
}