<template>
    <commentTable
    :thead="['Name', 'Text', 'Status', 'Change Staatus', 'Delete']">
        <tbody slot="tbody">
            <tr v-for="comment in comments" :key="comment.id">
                <td><span> {{ comment.name }}</span></td>
                <td><span> {{ comment.text }}</span></td>
                <td>
                    <span v-if="comment.status" class="statu true">Publish</span>
                    <span v-else class="statu false">Hiden</span>
                </td>
                <td><span @click="chengeComment(comment.id)" class="link"> Chenge Status</span></td>
                <td><span @click="deleteComment(comment.id)" class="link"> Delete</span></td>
            </tr>
        </tbody>
    </commentTable>
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
    methods: {
        chengeComment (id) {
            console.log(`Chenge comment id - ${id}`)
        },
        deleteComment (id) {
            console.log(`Delete comment id - ${id}`)
        }
    }
}
</script>