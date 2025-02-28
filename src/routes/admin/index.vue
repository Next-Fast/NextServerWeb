<script lang="ts">
import router from '@/router';
import { UseLoginInfoStore } from '@/stores/loginInfo';

const loginInfo = UseLoginInfoStore();

if (!loginInfo.hasLogin)
{
    await router.push('/admin/Admin_login');
}
</script>