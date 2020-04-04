# webapp
## Chirps - App academy online twitter clone suggestion Alt UI
combining Quora and twitter in something similar but different. User generated content. Twitter word limit: 280 -- bump number 420

## Logged Out

1. Register Page
    * Single page attempt login/Register
    * click scroll x between login and Register -- inspired by dribble search register

2. Text panel Register page
     * Hear what people are talking about -> Listen and view different perspectives -- needs more thought
    * Follow your interests -> Discover new interests
    * Join the conversation -> Be part of the conversation
   
  ## Logged In 

3. Brand logo

4. create Navbar / footer nav mobile
    1. Ul sections
        * Home
        * Explore
        * Notifcations
        * Settings _user_

5. Search bar

6. containers
    1. Main container grid 2: Post | Trends
    2. Card container
        * format : post card
            1. user
            2. left - user img
            3. user text
            4. conditional ? img : null
            5. follow button -- change to subscribe maybe

7. Post card reusable or alt

8. footer desktop only

9. Other pages 

## Backend
1. Routes
    1. Reply is a POST with a user as ref.id POST
    2. Retweet copies original POST from a user POST and allows an attached POST
    3. Like is an array that holds all users that clicked the button and return the length 
    4. -- not adding direct messages
2. Upload img Route only img/gif
3. User/Auth route -- 3/30 almost complete


11. Backend
1. Profile: req.user.id | Frontend:
    <container>
    <div> 
    <button>back arrow</div> 
    {name} {tweet.length}
    </div>

    <div className='grid-container'>
    <div {position: relative}> 
    <Avatar jsx> -- stylistic change: center avatar
    </div>     
    </div>

    <div>
    <button> Edit profile </button>
    {name} {@email -minus.com} {dateCreated-- a.k.a join date} {following} {followers} 

    -- notes: why is twitter showing user emails with @email ? !important create nickname in backend required: false, use @username as default instead of email

    </div>
    <div>buttons: tweet(post - from following) tweets and replies(loads user.post) likes(loads array of post you like) </div>
    -- notes: buttons load container below -- skipping media
    </container>
2. 
    1. USER
        1. Register User        - complete
        2. Update User          - complete
        3. Delete User          - complete
    2. Auth
        1. Login User           - complete
        2. Get Logged In User   - complete
        3. Logout               - complete
    3. Post
        1. get Post             - complete
        2. Post Message         - complete
        3. Update Post          - complete
        4. Delete Post          - complete
    4. Comment
        1. Post comment
        2. Update comment
        3. Delete Comment

## Optional

12. Extra features

