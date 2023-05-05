import {addObserver, appState} from "../../store/index";
import styles from "./profile.css"
class Profile extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({mode: "open"})
        addObserver(this);
    }

    async connectedCallback() {
        this.render()
    }

    render() {
        if (this.shadowRoot) this.shadowRoot.innerHTML = "";
        // TODO: Add CSS
        // loadCss(this, styles);

        const division = this.ownerDocument.createElement("section");

        // *****
        // *****
        // LEFT SIDE
        // *****
        // *****

        const  left_division = this.ownerDocument.createElement("section");

        // FLIP LOGO
        const flip_logo = this.ownerDocument.createElement('img');
        // TODO: SET FLIP LOGO URL
        flip_logo.setAttribute('src', "../../img/fliplogo2.png")
        left_division.appendChild(flip_logo)

        // PROFILE BUTTON
        const profile_button = this.ownerDocument.createElement('button');
        profile_button.addEventListener('click', () => {})
        profile_button.innerText = "Profile";
        left_division.appendChild(profile_button)

        // EDIT PROFILE BUTTON
        const edit_profile_button = this.ownerDocument.createElement('button');
        edit_profile_button.addEventListener('click', () => {})
        edit_profile_button.innerText = "Edit profile";
        left_division.appendChild(edit_profile_button)

        // CHANGE PASSWORD BUTTON
        const change_password_button = this.ownerDocument.createElement('button');
        change_password_button.addEventListener('click', () => {})
        change_password_button.innerText = "Change password";
        left_division.appendChild(change_password_button)

        // CONNECTED APPS BUTTON
        const connected_apps_button = this.ownerDocument.createElement('button');
        connected_apps_button.addEventListener('click', () => {})
        connected_apps_button.innerText = "Connected apps";
        left_division.appendChild(connected_apps_button)

        // PUSH NOTIFICATIONS BUTTON
        const push_notifications_button = this.ownerDocument.createElement('button');
        push_notifications_button.addEventListener('click', () => {})
        push_notifications_button.innerText = "Push notifications";
        left_division.appendChild(push_notifications_button)

        // MANAGE CONTACTS BUTTON
        const manage_contacts_button = this.ownerDocument.createElement('button');
        manage_contacts_button.addEventListener('click', () => {})
        manage_contacts_button.innerText = "Manage contacts";
        left_division.appendChild(manage_contacts_button)

        // PRIVACY AND SECURITY BUTTON
        const privacy_security_button = this.ownerDocument.createElement('button');
        privacy_security_button.addEventListener('click', () => {})
        privacy_security_button.innerText = "Privacy and security";
        left_division.appendChild(privacy_security_button)

        division.appendChild(left_division)

        // *****
        // *****
        // RIGHT SIDE
        // *****
        // *****

        const right_division = this.ownerDocument.createElement("section");

        if (appState.user === null) return
        const user = appState.user

        //EDIT BUTTON
        const edit_button = this.ownerDocument.createElement('img');
        // TODO: SET EDIT BUTTON URL
        edit_button.setAttribute('src', "../../img/tabler-icon-pencil.svg")
        edit_button.addEventListener('click', () => {})
        right_division.appendChild(edit_button)

        //GEAR BUTTON
        const gear_button = this.ownerDocument.createElement('img');
        // TODO: SET GEAR BUTTON URL
        gear_button.setAttribute('src', "../../img/tabler-icon-settings.svg")
        gear_button.addEventListener('click', () => {})
        right_division.appendChild(gear_button)

         // ADD PROFILE USER PHOTO
         const img = this.ownerDocument.createElement('img');
         img.setAttribute('src', user.photoURL)
         right_division.appendChild(img)

         // ADD USERNAME
         const username_field = this.ownerDocument.createElement("p")
         username_field.textContent = user.username;
         right_division.appendChild(username_field)

         // ADD FOLLOWERS
         const followers_field = this.ownerDocument.createElement("p")
         followers_field.textContent = user.followersUsers.length + "followers"
         right_division.appendChild(followers_field)

         // ADD FOLLOWING
         const following_field = this.ownerDocument.createElement("p")
         following_field.textContent = user.followingUsers.length + "following"
         right_division.appendChild(following_field)

         // ADD PROFILE POSTS PHOTOS SECTION
         const user_photo_division = this.ownerDocument.createElement("section");
         const current_user = appState.user;
         const user_posts = appState.posts;
         for (let i=0; i<user_posts.length; i++){
             const post = user_posts[i]
             if (current_user  === null) break
             if (post.ownerUserId != current_user?.idUser) continue

             const img = this.ownerDocument.createElement('img');
             img.setAttribute('src', post.photoURL)
             user_photo_division.appendChild(img)
         }
         right_division.appendChild(user_photo_division)

         division.appendChild(right_division)

         // *****
         // *****
         // *****
         // *****

         this.shadowRoot?.appendChild(division)
     }
 }

 customElements.define("app-profile", Profile);