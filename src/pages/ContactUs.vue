<template>
    <section>
        <MailAnimation/>
        <ContactForm />
    </section>
</template>

<script>
import ContactForm from '../components/ContactFormComponent.vue';
import MailAnimation from '../components/MailAnimation.vue';
export default {
    name: 'ContactUs',
    components: {
        ContactForm,
        MailAnimation
    }
}
</script>

<style lang="scss" scoped>

</style>