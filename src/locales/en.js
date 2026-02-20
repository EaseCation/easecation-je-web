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
    modpack: 'Download Modpack',
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
    modPurpose: 'Installing the Mod is required to correctly render custom blocks, custom entities, player skins, and ModUI content on the server, and provides additional performance optimizations.',
    requirements: {
      title: 'Requirements',
    },
    step1: {
      title: 'Download Modpack',
      desc: 'Click the button below to download the modpack file.',
      btn: 'Download Modpack',
    },
    step2: {
      title: 'Choose Installation Method',
      thirdParty: {
        title: 'Third-party Launcher (HMCL, PCL2, BakaXL, etc.)',
        desc: 'In the launcher, select "Import Modpack" and choose the downloaded <code>.zip</code> file for automatic installation. The server address is pre-configured, so you can connect directly after installation.',
      },
      official: {
        title: 'Official Launcher (Manual Installation)',
        step1: 'Go to the <a href="https://fabricmc.net/use/installer/" target="_blank" rel="noopener">Fabric website</a> to download the installer, select Minecraft <strong>1.21.11</strong> and install Fabric Loader',
        step2: 'Extract the modpack and copy files from <code>overrides/mods</code> to <code>.minecraft/mods/</code>',
        step3: 'Copy files from <code>overrides/config</code> to <code>.minecraft/config/</code>',
        tip: '<strong>Tip:</strong> Windows users can access the folder via <code>%appdata%\\.minecraft</code>; macOS users: <code>~/Library/Application Support/minecraft</code>.',
      },
    },
    step3: {
      title: 'Launch and Connect',
      desc: 'In the launcher, select the <strong>Fabric 1.21.11</strong> profile to launch. Go to "Multiplayer" and add the server address:',
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
