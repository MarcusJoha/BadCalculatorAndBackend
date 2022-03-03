import { mount } from "@vue/test-utils";
import LogIn from '@/views/LogIn.vue';

describe('LogIn', () => {
    test("If email or password is wrong show register option", async () => {
        const wrapper = mount(LogIn);
        await wrapper.setData({ loggedIn: true })
        expect(wrapper.find('reg').isVisible()).toBe(false);
    })

    test("If email or password is wrong show register option", async () => {
        const wrapper = mount(LogIn);
        await wrapper.setData({ loggedIn: false })
        expect(wrapper.find('reg').isVisible()).toBe(true);
    })
})