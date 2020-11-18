<template>
	<no-ssr>
	<commentTable
	:thead="['Name', 'Text', 'Status', 'Change Staatus', 'Delete']">
		<tbody slot="tbody">
			<tr v-for="comment in comments" :key="comment.id">
				<td><span> {{ comment.name }}</span></td>
				<td><span> {{ comment.text }}</span></td>
				<td>
					<span v-if="comment.publish" class="status true">Publish</span>
					<span v-else class="status false">Hiden</span>
				</td>
				<td><span @click="chengeComment(comment)" class="link"> Chenge Status</span></td>
				<td><span @click="deleteComment(comment.id)" class="link"> BAN </span></td>
			</tr>
		</tbody>
	</commentTable>
	</no-ssr>
</template>

<script>
import commentTable from '@/components/Admin/CommentTable.vue'


export default {
	components: { commentTable },
	layout: 'admin',
	data () {
		return {
		  comments:[
				{
					id: 1,
					name: 'Alex',
					text: 'Wery interesting',
					status: true
				},
				{
					id: 2,
					name: 'Vlad',
					text: 'Best Math book ever !',
					status: true
				}
			]
		}
	},
	mounted () {
		this.loadComments()
	},
	methods: {
		loadComments () {
		this.$axios.get('https://blog-app-b278b.firebaseio.com/comments.json')
				.then((res)=> {
					// thnc firebase
					let commentsArray = []
					Object.keys(res.data).forEach(key => {
						const comment = res.data[key]
						commentsArray.push( { ...comment, id: key })
					})
					this.comments = commentsArray
			})
		},
		chengeComment (comment) {
			comment.publish = !comment.publish
			this.$axios.put(`https://blog-app-b278b.firebaseio.com/comments/${comment.id}.json`, comment)
		},
		deleteComment (id) {
			this.$axios.delete(`https://blog-app-b278b.firebaseio.com/comments/${id}.json`)
				.then((res) => {this.loadComments()})
		}
	},
	
}
</script>