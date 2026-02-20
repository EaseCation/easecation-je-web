export default {
  hero: {
    subtitle: 'Java Edition · 技术预览测试',
    tag: '基于 ViaProxy · Tech Preview · 部分玩法未适配',
  },
  server: {
    label: '服务器地址',
    copy: '复制',
    copied: '已复制 ✓',
  },
  download: {
    modpack: '下载整合包',
    tutorial: '安装教程',
  },
  highlights: {
    title: '我们在做什么',
    crossVersion: {
      title: '跨版本内容桥接',
      desc: '在 ViaProxy 与 ViaBedrock 的基础上持续深耕，大幅扩展了跨版本内容的翻译兼容覆盖范围，让更多游戏内容得以无缝呈现。',
    },
    entityAnimation: {
      title: '生物动画引擎',
      desc: '以 ViaBedrockUtility 为起点，自主实现了完整的实体渲染控制器、动画系统、动画控制器与贴图管线，并同步完成大量底层性能调优。',
    },
    performance: {
      title: '极致帧率体验',
      desc: '针对实体渲染链路专项攻坚，覆盖距离 LOD 动画刷新、视野剔除、HashMap 优化等，实测帧率相比基岩版提升数倍。',
    },
    modui: {
      title: '自研 UI 渲染引擎',
      desc: '独立打造的 Java 版 ModUI 渲染引擎，相比中国版拥有更高的渲染性能、更稳定的表现效果和更精细的控制能力。',
    },
    auth: {
      title: 'Java 正版验证',
      desc: '当前已开放 Minecraft Java 正版账号登录，更多验证方式正在积极规划中，敬请期待。',
    },
    openSource: {
      title: '全部开源',
      desc: '所有项目与 Mod 均已在 GitHub 开源，欢迎社区参与贡献与反馈。',
    },
  },
  tutorial: {
    title: '安装教程',
    modPurpose: '安装 Mod 是为了正确渲染服务器中的自定义方块、自定义实体、玩家皮肤、ModUI 等内容，并提供额外的性能优化。',
    requirements: {
      title: '环境要求',
    },
    step1: {
      title: '下载整合包',
      desc: '点击下方按钮下载整合包文件。',
      btn: '下载整合包',
    },
    step2: {
      title: '选择安装方式',
      thirdParty: {
        title: '第三方启动器（HMCL、PCL2、BakaXL 等）',
        desc: '在启动器中选择「导入整合包」，选择下载的 <code>.zip</code> 文件即可自动安装。服务器地址已预置，安装完成后可直接连接。',
      },
      official: {
        title: '官方启动器（手动安装）',
        step1: '前往 <a href="https://fabricmc.net/use/installer/" target="_blank" rel="noopener">Fabric 官网</a> 下载安装器，选择 Minecraft <strong>1.21.11</strong> 版本安装 Fabric Loader',
        step2: '解压整合包，将 <code>overrides/mods</code> 中的文件复制到 <code>.minecraft/mods/</code>',
        step3: '将 <code>overrides/config</code> 中的文件复制到 <code>.minecraft/config/</code>',
        tip: '<strong>提示：</strong>Windows 用户可通过 <code>%appdata%\\.minecraft</code> 快速访问；macOS 用户路径为 <code>~/Library/Application Support/minecraft</code>。',
      },
    },
    step3: {
      title: '启动游戏并连接',
      desc: '在启动器中选择 <strong>Fabric 1.21.11</strong> 配置启动游戏。进入「多人游戏」，添加服务器地址：',
    },
    notice: '游戏数据与中国版正式服数据不互通，仅做技术测试',
  },
  footer: {
    openSource: '开源项目',
    copyright: '©2026 宁波易什网络科技有限公司 版权所有',
    icp: 'ICP备案/许可证号：',
    language: '语言',
  },
}
