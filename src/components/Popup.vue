<template>
  <div class="popup">
    <h3>Save Email & Copy Alias</h3>
    <input v-model="email" placeholder="Enter email" />
    <button @click="saveEmail">{{ saveButtonName }}</button>
    <button @click="copyEmail">Copy Email</button>
    <button @click="copyAlias">Copy Email Alias</button>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  setup() {
    const email = ref('');
    const saveButtonName = ref('Save');

    // Load stored email on mount
    onMounted(() => {
      chrome.storage?.local?.get('email', (result) => {
        if (result.email) {
          email.value = result.email;
          saveButtonName.value = 'Saved';
        } else {
          saveButtonName.value = 'Save';
        }
      });
    });

    const saveEmail = () => {
      chrome.storage.local.set({ email: email.value }, () => {
        saveButtonName.value = 'Saved';
        alert('Email saved!');
      });
    };

    const copyEmail = () => {
      navigator.clipboard.writeText(email.value).then(() => {
        alert(`Copied Email: ${email.value}`);
      });
    };

    const copyAlias = () => {
      if (!email.value.includes('@')) {
        alert('Invalid email!');
        return;
      }

      const now = new Date();
      const perthOffset = 8 * 60 * 60 * 1000; // 8 hours in milliseconds
      const perthTime = new Date(now.getTime() + perthOffset);
      const timeStamp = new Date(perthTime)
        .toISOString()
        .replace(/[:T-]/g, '')
        .slice(0, 12);
      const aliasEmail = email.value.replace(/@/, `+${timeStamp}@`);
      navigator.clipboard.writeText(aliasEmail).then(() => {
        alert(`Copied alias Email: ${aliasEmail}`);
      });
    };

    return { email, saveEmail, copyEmail, copyAlias, saveButtonName };
  },
};
</script>

<style>
.popup {
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 200px;
}
input {
  margin-bottom: 10px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
button {
  margin-bottom: 5px;
  cursor: pointer;
  padding: 5px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
}
button:hover {
  background-color: #0056b3;
}
</style>
