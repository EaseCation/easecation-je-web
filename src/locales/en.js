export default {
  hero: {
    subtitle: 'Java Edition · Tech Preview',
    tag: 'Powered by ViaProxy · Tech Preview · Some features not adapted',
  },
  server: {
    label: 'Server Address',
    copy: 'Copy',
    copied: 'Copied ✓',
  },
  download: {
    modpack: 'Download Client Package',
    tutorial: 'Installation Guide',
  },
  highlights: {
    title: 'What We Build',
    crossVersion: {
      title: 'Cross-Version Content Bridge',
      desc: 'Building on ViaProxy and ViaBedrock, we continuously expand cross-version content translation coverage, enabling more in-game content to render seamlessly.',
    },
    entityAnimation: {
      title: 'Entity Animation Engine',
      desc: 'Starting from ViaBedrockUtility, we independently implemented a complete entity render controller, animation system, animation controller, and texture pipeline, along with extensive low-level performance tuning.',
    },
    performance: {
      title: 'Extreme Frame Rate',
      desc: 'Dedicated optimization of the entity rendering pipeline, covering distance-based LOD animation refresh, frustum culling, HashMap optimization, and more. Measured frame rates are several times higher than Bedrock Edition.',
    },
    modui: {
      title: 'Custom UI Rendering Engine',
      desc: 'An independently developed ModUI rendering engine for Java Edition, offering higher render performance, more stable behavior, and finer control compared to the China Edition.',
    },
    auth: {
      title: 'Java Edition Authentication',
      desc: 'Minecraft Java Edition account login is now available. More authentication methods are actively being planned. Stay tuned.',
    },
    openSource: {
      title: 'Fully Open Source',
      desc: 'All projects and Mods are open-sourced on GitHub. Community contributions and feedback are welcome.',
    },
  },
  tutorial: {
    title: 'Installation Guide',
    modPurpose: 'The client package downloads and updates the required Mods at launch so custom blocks, custom entities, player skins, and ModUI content render correctly, with additional performance optimizations.',
    requirements: {
      title: 'Requirements',
    },
    step1: {
      title: 'Download Client Package',
      desc: 'Click the button below to download the HMCL client package.',
      btn: 'Download Client Package',
    },
    step2: {
      title: 'Choose Installation Method',
      thirdParty: {
        title: 'HMCL or Launchers That Support Instance Import',
        desc: 'In the launcher, choose "Import Modpack/Instance" and select the downloaded <code>.zip</code> file. Required Mods and config are downloaded automatically on first launch, so keep the network connected.',
      },
    },
    step3: {
      title: 'Launch and Connect',
      desc: 'In the launcher, start the imported <strong>EaseCation</strong> instance. Go to "Multiplayer" and add the server address:',
    },
    notice: 'Game data is not shared with the China Edition official server. For technical testing only.',
  },
  footer: {
    openSource: 'Open Source Projects',
    copyright: '©2026 Ningbo Yishi Network Technology Co., Ltd. All Rights Reserved',
    icp: 'ICP License:',
    language: 'Language',
  },
}
