class GitHub {
	constructor(){
		this.client_id = 'bfc14c4097cdc8dca7d6';
		this.client_secret = '9c0933beba211201803b2c8c2dc6b80038755515';
		this.repos_sort = 'created: asc';
		this.repos_count = 5;
	}
	async getUser(user){
		const profileResponse = await fetch(`https://api.github.com/users/${user}?
		client_id=${this.client_id}&client_secret=${this.client_secret}`);

		const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?
		per_page=${this.repos_count}&sort=${this.repos_sort}client_id=${this.client_id}&client_secret=${this.client_secret}`);

		const profile = await  profileResponse.json();
		const repos = await  repoResponse.json();      				//2 responses profile and repo
		return {
			profile,
			repos            //is thissame repos: repos  object?
		}
	}
}