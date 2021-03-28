/* code for edit/save post functionality it edit/save post based on count of user click, like whenever user click on edit button 
the variale click becomes a odd number and we set the post in editing format and change the edit button with save button
and when variable click becomes even then we set up the post in non-editing format and change the save button to edit button */

var click=0;
function editPost () {
	click=click+1;
	if(click%2==0){

		document.getElementById('post_text').contentEditable = false;
        document.getElementById('edit_button').innerHTML='Edit <i class="fa fa-edit"></i>';
	}

	else{

		document.getElementById('post_text').contentEditable = true;
        document.getElementById('edit_button').innerHTML='Save <i class="fa fa-save"></i>';
	}
}

/* code for counting the likes and display message on the basis of number of times like button clicked */

var countLikes = 0;
function countOfLikes(){
    
    if(countLikes==0){
     
    countLikes++;
	document.getElementById('like_post').innerHTML = '<i class="fa fa-thumbs-up"></i>&nbsp;Liked!';
	document.getElementById("like_count").innerHTML = countLikes+' person liked this!';

    }
    
    else{

    	countLikes++;
    	document.getElementById("like_count").innerHTML = countLikes +' people have liked this!';
    }
}