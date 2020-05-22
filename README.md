# webapp
## Chirps - App academy online twitter clone suggestion Alt UI
combining Quora and twitter in something similar but different. User generated content. Twitter word limit: 280 -- bump number 420

## Logged Out

1. Card
    -user Login Component: 
    * Email Input
    * Password Input
    * Register Button
    * Login Button
    * User Login Page styling
    Register Page
    * Register Login Redirect
    * Register Form
    * Register Submit Button
    * Make the form a single Form that can switch between login/Register, single page -- inspired by dribble search register 

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

    </div>
    <div>buttons: tweet(post - from following) tweets and replies(loads user.post) likes(loads array of post you like) </div>
    -- notes: buttons load container below -- skipping media
    </container>
2. 
    1. USER
        1. Register User        - complete
        2. Update User          - complete
        3. Delete User          - complete
        4. Update Password      - complete
    2. Auth
        1. Login User           - complete
        2. Get Logged In User   - complete
        3. Logout               - complete
    3. Post
        1. get Post             - complete
        2. Post Message         - complete
        3. Update Post          - complete
        4. Delete Post          - complete
        5. Like Post            - complete
        6. Dislike Post         - complete
    4. Comment
        1. Post comment         - complete
        2. Update comment       - complete
        3. Delete Comment       - complete
        4. Like comment         - complete
        5. Unlike comment       - complete
    5. Replies
        1. Reply to a comment   - complete
        2. Edit Reply           - complete
        3. Delete Reply         - complete


    Update 5/19/2020: I was asked to help in another project. For now I cannot recall
    my train of thought regarding the Friends system. Therefore, I'll be 
    abandoning this and moving on to the front-end.

    6. Friends Request
        1. Modular or single Method
        2. add Friends Req
        3. Cancel Req
          1. Prevent Req spam:
             delay subsequent req 
             to 3 days if not rejected
        3. Reject Req
            1. Set subsequent req 
               delay to 30 days
        4. Accept Req
            1. Check Friends List short circuit
            2. Remove from array
    7. Friends List : Challenge! start - 4/16/2020 or later
        1. send Friend Req
        2. Receive Friend Req
        3. Decline | accept Req  

## Optional
6. Friends List
    * Make post private
    4. Private viewable FList
7. Followers : conceptually not sure of rules.


12. Extra features

13. Skipped Features | Note
Small scope project, some features will not implemented such as deleting a user account and handling the cascading effects related to user post/comments/etc, password reset, etc

