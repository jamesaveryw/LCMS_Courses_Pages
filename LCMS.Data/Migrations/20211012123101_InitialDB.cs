using Microsoft.EntityFrameworkCore.Migrations;

namespace LCMS.Data.Migrations
{
    public partial class InitialDB : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Courses",
                columns: table => new
                {
                    Crs_Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Crs_Title = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Crs_Number = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Crs_Type = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Crs_Blurb = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Courses", x => x.Crs_Id);
                });

            migrationBuilder.CreateTable(
                name: "Pages",
                columns: table => new
                {
                    Pg_Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Pg_Title = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Pg_Content = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Pages", x => x.Pg_Id);
                });

            migrationBuilder.CreateTable(
                name: "CoursesPages",
                columns: table => new
                {
                    Crs_Id = table.Column<int>(type: "int", nullable: false),
                    Pg_Id = table.Column<int>(type: "int", nullable: false),
                    CP_Order = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CoursesPages", x => new { x.Crs_Id, x.Pg_Id });
                    table.ForeignKey(
                        name: "FK_CoursesPages_Courses_Crs_Id",
                        column: x => x.Crs_Id,
                        principalTable: "Courses",
                        principalColumn: "Crs_Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_CoursesPages_Pages_Pg_Id",
                        column: x => x.Pg_Id,
                        principalTable: "Pages",
                        principalColumn: "Pg_Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_CoursesPages_Pg_Id",
                table: "CoursesPages",
                column: "Pg_Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "CoursesPages");

            migrationBuilder.DropTable(
                name: "Courses");

            migrationBuilder.DropTable(
                name: "Pages");
        }
    }
}
